Đoạn mã
<script setup>
import { ref } from 'vue'
import axios from 'axios'

// 1. Dữ liệu Form liên hệ
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

// 2. Hàm gửi Form về Node.js Backend
const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await axios.post('http://localhost:5000/api/contact', form.value)
    submitSuccess.value = true
    form.value = { firstName: '', lastName: '', email: '', message: '' }
  } catch (error) {
    alert('Có lỗi xảy ra khi gửi thông tin!')
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="site-container">
    <!-- Header / Navbar Fixed -->
    <header class="navbar">
      <div class="nav-left">
        <button class="hamburger-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="brand">
        <h1>Elements</h1>
        <span class="subtitle">Catering Service</span>
      </div>

      <div class="nav-right">
        <a href="#quiz" class="circle-btn">
          <span>Start Quiz</span>
        </a>
      </div>
    </header>

    <!-- Fixed Social Bar Left -->
    <aside class="social-sidebar">
      <a href="#"><i class="icon">📷</i></a>
      <a href="#"><i class="icon">🐦</i></a>
      <a href="#"><i class="icon">f</i></a>
    </aside>

    <!-- Main Content -->
    <main>
      <!-- HERO SECTION: Collage Image Grid -->
      <section class="hero-section">
        <div class="collage-container">
          <!-- Ảnh đệm góc trái -->
          <img class="img-1" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" alt="Plated Food" />
          <!-- Ảnh góc trên phải (Cocktail) -->
          <img class="img-2" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" alt="Cocktail" />
          <!-- Ảnh giữa chính (Đĩa ăn trắng) -->
          <img class="img-3" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" alt="Fine Dining" />
          <!-- Ảnh hoa vàng -->
          <img class="img-4" src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&q=80" alt="Yellow Flowers" />
          <!-- Ảnh bên phải (Món nướng) -->
          <img class="img-5" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80" alt="Gourmet Dish" />
          <!-- Ảnh trắng đen góc dưới (Tiệc) -->
          <img class="img-6" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" alt="Party Celebration" />
        </div>
      </section>

      <!-- TESTIMONIAL SECTION -->
      <section class="testimonial-section">
        <div class="section-title">WHAT PEOPLE SAY ABOUT US</div>
        <hr class="divider" />
        <div class="quote-box">
          <p class="quote-text">
            “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
          </p>
          <p class="author">Brenda Carte</p>
          <div class="dots">
            <span class="dot active"></span>
            <span class="dot"></span>
          </div>
        </div>
        <hr class="divider" />
      </section>

      <!-- CONTACT SECTION: Drop us a line -->
      <section class="contact-section">
        <div class="contact-grid">
          <!-- Form -->
          <div class="form-wrapper">
            <h3>DROP US A LINE</h3>
            
            <p v-if="submitSuccess" class="success-msg">Cảm ơn bạn! Thông tin đã được gửi thành công.</p>
            
            <form @submit.prevent="handleSubmit" v-else>
              <div class="row">
                <div class="input-group">
                  <label>First name *</label>
                  <input v-model="form.firstName" type="text" required />
                </div>
                <div class="input-group">
                  <label>Last name *</label>
                  <input v-model="form.lastName" type="text" required />
                </div>
              </div>

              <div class="input-group">
                <label>Email *</label>
                <input v-model="form.email" type="email" required />
              </div>

              <div class="input-group">
                <label>Type your message here...</label>
                <textarea v-model="form.message" rows="4" required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Submit Now' }}
              </button>
            </form>
          </div>

          <!-- Feature Image (Khói/Ẩm thực) -->
          <div class="contact-image">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Culinary Smoke Effect" />
          </div>
        </div>
      </section>

      <!-- BIG SOCIAL LINKS -->
      <section class="big-socials">
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
      </section>
    </main>

    <!-- Footer -->
    <footer>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap');

/* Color Variables */
:root {
  --primary: #2b2b80;
  --text-dark: #2b2b80;
  --bg-white: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  border: 15px solid #2b2b80;
}

.site-container {
  font-family: 'Playfair Display', Georgia, serif;
  color: #2b2b80;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
  padding: 0 40px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  position: relative;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.hamburger-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #2b2b80;
}

.brand {
  text-align: center;
}
.brand h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2b2b80;
  letter-spacing: -0.5px;
}
.brand .subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 0.9rem;
  color: #2b2b80;
}

/* Circle Button (Start Quiz) */
.circle-btn {
  width: 100px;
  height: 100px;
  border: 1px solid #2b2b80;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #2b2b80;
  font-style: italic;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}
.circle-btn:hover {
  background-color: #2b2b80;
  color: #fff;
}

/* Fixed Social Bar Left */
.social-sidebar {
  position: fixed;
  left: 30px;
  top: 45%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10;
}
.social-sidebar a {
  color: #2b2b80;
  text-decoration: none;
  font-size: 1.1rem;
}

/* Collage Image Grid */
.hero-section {
  padding: 60px 0 100px 0;
  display: flex;
  justify-content: center;
}
.collage-container {
  position: relative;
  width: 750px;
  height: 520px;
}
.collage-container img {
  position: absolute;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.img-1 { width: 180px; height: 380px; left: 0; top: 90px; z-index: 2; }
.img-2 { width: 170px; height: 220px; left: 265px; top: 0; z-index: 1; }
.img-3 { width: 170px; height: 220px; left: 245px; top: 140px; z-index: 4; }
.img-4 { width: 140px; height: 210px; left: 210px; top: 230px; z-index: 3; }
.img-5 { width: 220px; height: 200px; right: 0; top: 170px; z-index: 2; }
.img-6 { width: 210px; height: 230px; left: 275px; top: 280px; z-index: 5; filter: grayscale(100%); }

/* Testimonial Section */
.testimonial-section {
  max-width: 700px;
  margin: 0 auto 100px auto;
  text-align: center;
}
.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 600;
  color: #2b2b80;
  margin-bottom: 25px;
}
.divider {
  border: none;
  border-top: 1px solid #2b2b80;
  opacity: 0.4;
  margin: 25px 0;
}
.quote-text {
  font-size: 1.05rem;
  line-height: 1.7;
  font-style: italic;
  color: #2b2b80;
  margin-bottom: 20px;
}
.author {
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 25px;
}
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ccc;
}
.dot.active {
  background-color: #2b2b80;
}

/* Contact Section */
.contact-section {
  max-width: 850px;
  margin: 0 auto 100px auto;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  align-items: center;
}
.form-wrapper h3 {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  color: #2b2b80;
  margin-bottom: 30px;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.row {
  display: flex;
  gap: 15px;
}
.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.input-group label {
  font-size: 0.85rem;
  font-style: italic;
  margin-bottom: 5px;
  color: #2b2b80;
}
.input-group input, .input-group textarea {
  border: 1px solid #b3c2c8;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
  background-color: transparent;
}
.submit-btn {
  background: none;
  border: none;
  color: #2b2b80;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 5px 0;
  text-align: center;
  width: 100%;
}
.contact-image img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}

/* Big Social Links */
.big-socials {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 80px;
}
.social-link {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2b2b80;
  text-decoration: none;
  transition: opacity 0.3s;
}
.social-link:hover {
  opacity: 0.7;
}

/* Footer */
footer {
  text-align: center;
  padding: 25px 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #555;
  border-top: 1px solid #eee;
}

/* Responsive */
@media (max-width: 1024px) {
  #app {
    display: grid;
    grid-template-columns: 1fr !important;
    padding: 0 2rem;
  }
}
@media (max-width: 768px) {
  .site-container { padding: 0 15px; }
  .social-sidebar { display: none; }
  .contact-grid { grid-template-columns: 1fr; }
  .collage-container { width: 100%; height: auto; display: flex; flex-direction: column; gap: 10px; }
  .collage-container img { position: relative; width: 100% !important; height: 250px !important; left: 0 !important; top: 0 !important; }
  .big-socials { flex-direction: column; align-items: center; gap: 20px; }
}
</style>