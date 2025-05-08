# Django + React Full Stack Registration CRUD App

A full stack registration app built with Django REST Framework (backend) and Vite + React + Tailwind CSS (frontend). This project serves as a practical learning resource for building full stack applications using modern technologies.

## 🚀 Features

- User Registration (name, email, password, description)
- View list of registered users
- Delete registration
- API integration using Axios
- Tailwind CSS for clean UI design
- Organized project structure (Django backend + Vite frontend)

---

## 📂 Project Structure

```

curdoperation/                 # Django backend
├── curdoperation/            # Django settings
├── register/                 # App: models, views, serializers
vite-react-frontend/          # React + Vite + Tailwind frontend

````

---

## 🛠️ Tech Stack

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- React (with Vite)
- TypeScript
- Tailwind CSS
- Axios

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/django-react-crud-registration.git
cd django-react-crud-registration
````

---

### 2. Backend Setup (Django)

```bash
cd curdoperation
python manage.py migrate
python manage.py runserver
```

* Make sure Django runs at `http://localhost:8000/`
* API endpoints will be prefixed with `/register/`

---

### 3. Frontend Setup (React)

```bash
cd ../vite-react-frontend
npm install
npm run dev
```

* React app runs on `http://localhost:5173/`
* Ensure Axios points to the Django backend (`http://localhost:8000/register/...`)

---

## 🌐 API Endpoints (Sample)

| Method | Endpoint                            | Description              |
| ------ | ----------------------------------- | ------------------------ |
| GET    | /register/registration-list/        | List all registrations   |
| POST   | /register/registration-create/      | Create new registration  |
| GET    | /register/registration-list/\:id/   | View registration detail |
| PUT    | /register/registration-update/\:id/ | Update registration      |
| DELETE | /register/registration-delete/\:id/ | Delete registration      |

