const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server'); // Import the actual app with routes
const User = require('../Backend/models/User');
const Service = require('../Backend/models/Service');
const Booking = require('../Backend/models/Booking');
const Payment = require('../Backend/models/Payment');
const Review = require('../Backend/models/Review');
const Cart = require('../Backend/models/Cart');
const ServiceProvider = require('../Backend/models/ServiceProvider');

// Connect to test DB before all tests
const dotenv = require('dotenv');
dotenv.config();

let testUser;
let testService;
let testProvider;
let testBooking;

beforeAll(async () => {
  const MONGODB_URI = process.env.MONGO_URI || 'mongodb+srv://V4:Nan%40%261234@v4.lo8j7.mongodb.net/testdb?retryWrites=true&w=majority&appName=V4';
  await mongoose.connect(MONGODB_URI);
  
  // Create testUser, testService, testProvider for dependent tests
  testUser = await User.create({
    full_name: 'Test User',
    email: `testuser+${Date.now()}@example.com`,
    password_hash: 'hashedpassword'
  });

  testService = await Service.create({
    service_name: 'Test Service',
    description: 'Test service description',
    service_type: 'general',
    availability: ['morning'],
    avg_rate_per_hr: 100
  });

  testProvider = await ServiceProvider.create({
    full_name: 'Test Provider',
    email: `provider+${Date.now()}@example.com`,
    phone: '1234567890'
  });
});

// Clean up collections before each test
beforeEach(async () => {
  const collections = ['users', 'services', 'bookings', 'payments', 'reviews', 'carts', 'serviceproviders'];
  for (const name of collections) {
    await mongoose.connection.db.collection(name).deleteMany({});
  }
});

// Close connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('API Integration Tests', () => {
  const testEmail = `testuser+${Date.now()}@example.com`;

  it('POST /api/users should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      full_name: 'Test User',
      email: testEmail,
      password: 'TestPass123'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('email', testEmail);
  });

  it('GET /api/users should return 200 and array', async () => {
    await User.create({ full_name: 'Test User', email: testEmail, password_hash: 'hashed' });
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/services should create a new service', async () => {
    const serviceData = {
      service_name: 'New Test Service',
      description: 'Another service',
      service_type: 'general',
      availability: ['afternoon'],
      avg_rate_per_hr: 120
    };
    const res = await request(app).post('/api/services').send(serviceData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.service_name).toBe(serviceData.service_name);
  });

  it('GET /api/services should return 200 and array', async () => {
    const res = await request(app).get('/api/services');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/providers should return 200 and array', async () => {
    const res = await request(app).get('/api/providers');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/providers should create a new provider', async () => {
    const providerData = {
      full_name: 'Second Provider',
      email: `second+${Date.now()}@example.com`,
      phone: '1122334455'
    };
    const res = await request(app).post('/api/providers').send(providerData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.full_name).toBe(providerData.full_name);
  });

  it('POST /api/bookings should create a new booking', async () => {
    const bookingData = {
      user_id: testUser._id,
      service_id: testService._id,
      provider_id: testProvider._id,
      booking_date: new Date().toISOString(),
      duration: 'hourly',
      status: 'pending',
      payment_status: 'pending',
      price: 100
    };
    const res = await request(app).post('/api/bookings').send(bookingData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.status).toBe('pending');
    testBooking = res.body; // Save for payment test
  });

  it('GET /api/bookings should return 200 and array', async () => {
    const res = await request(app).get('/api/bookings');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/payments should create a new payment', async () => {
    const paymentData = {
      booking_id: testBooking._id,
      user_id: testUser._id,
      amount: 100,
      payment_method: 'credit card',
      payment_status: 'paid',
      transaction_id: 'txn_test123'
    };
    const res = await request(app).post('/api/payments').send(paymentData);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.payment_status).toBe('paid');
  });

  it('GET /api/payments should return 200 and array', async () => {
    const res = await request(app).get('/api/payments');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/reviews should create a new review', async () => {
    const reviewData = {
      user_id: testUser._id,
      provider_id: testProvider._id,
      ratings: 5,
      comment: 'Excellent service!'
    };
    const res = await request(app).post('/api/reviews').send(reviewData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.ratings).toBe(5);
  });

  it('GET /api/reviews should return 200 and array', async () => {
    const res = await request(app).get('/api/reviews');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/carts should create a new cart', async () => {
    const cartData = {
      user_id: testUser._id,
      items: [{
        service_id: testService._id,
        quantity: 2
      }]
    };
    const res = await request(app).post('/api/carts').send(cartData);
    expect(res.statusCode).toEqual(200);
    expect(res.body.user_id).toBe(testUser._id.toString());
  });

  it('GET /api/carts should return 200 and array', async () => {
    const res = await request(app).get('/api/carts');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
