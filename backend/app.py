from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///idle_ceo_game.db'
db = SQLAlchemy(app)

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    balance = db.Column(db.Float, default=0.0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Business(db.Model):
    business_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    business_name = db.Column(db.String(120), nullable=False)
    level = db.Column(db.Integer, default=1)
    revenue_rate = db.Column(db.Float, default=1.0)
    perk = db.Column(db.String(120))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Transaction(db.Model):
    transaction_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    transaction_type = db.Column(db.String(50), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

class Shop(db.Model):
    shop_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('business.business_id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user:
        return jsonify({'message': 'Login successful', 'user_id': user.user_id}), 200
    return jsonify({'message': 'User not found'}), 404

@app.route('/api/start_business', methods=['POST'])
def start_business():
    data = request.get_json()
    new_business = Business(user_id=data['user_id'], business_name=data['business_name'])
    db.session.add(new_business)
    db.session.commit()
    return jsonify({'message': 'Business started successfully'}), 201

@app.route('/api/upgrade_business', methods=['POST'])
def upgrade_business():
    data = request.get_json()
    business = Business.query.filter_by(business_id=data['business_id']).first()
    if business:
        business.level += 1
        business.revenue_rate *= 1.1
        db.session.commit()
        return jsonify({'message': 'Business upgraded successfully'}), 200
    return jsonify({'message': 'Business not found'}), 404

@app.route('/api/shop/list', methods=['GET'])
def list_shop():
    shop_items = Shop.query.all()
    return jsonify([{'shop_id': item.shop_id, 'user_id': item.user_id, 'business_id': item.business_id, 'price': item.price} for item in shop_items]), 200

@app.route('/api/shop/buy', methods=['POST'])
def buy_shop():
    data = request.get_json()
    shop_item = Shop.query.filter_by(shop_id=data['shop_id']).first()
    if shop_item:
        db.session.delete(shop_item)
        db.session.commit()
        return jsonify({'message': 'Business bought successfully'}), 200
    return jsonify({'message': 'Shop item not found'}), 404

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)