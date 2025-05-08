# 🧾 Django CRUD Operation Backend Project

A simple **backend-only** Django project that provides **CRUD operations** for a Registration form.

This project is built using **Django REST Framework (DRF)** and exposes RESTful API endpoints for user registration handling, including fields like `name`, `email`, `password`, and `description`.

---

## 📁 Folder Structure

```
curdoperation/
│
├── curdoperation/       # Django project settings
├── register/            # App containing models and views
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py         # All CRUD logic in one file
│
├── manage.py
└── requirements.txt
```

---

## 🚀 Features

* ✅ Create user registration
* 📋 List all users
* 🔍 View single user details
* ✏️ Update user data
* ❌ Delete user
* 📦 Structured JSON responses with:

  * `"status"`: `true` or `false`
  * `"message"`: Result message
  * `"data"`: Optional payload (dictionary or list)

---

## 🛠️ Technologies Used

* Python 3.x
* Django 4.x
* Django REST Framework
* MySQL

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/curdoperation.git
cd curdoperation
```

### 2. Create and Activate Virtual Environment

```bash
python -m venv venv
On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Run the Development Server

```bash
python manage.py runserver
```

Your API is now live at:
👉 `http://localhost:8000/api/`

---

## 🌐 API Endpoints

| Method | Endpoint                         | Description                     |
| ------ | -------------------------------- | ------------------------------- |
| GET    | `/api/`                          | Show API overview               |
| GET    | `/api/registration-list/`        | Get list of all registrations   |
| GET    | `/api/registration-detail/<id>/` | Get details of a specific user  |
| POST   | `/api/registration-create/`      | Create a new registration       |
| POST   | `/api/registration-update/<id>/` | Update an existing registration |
| DELETE | `/api/registration-delete/<id>/` | Delete a registration           |

