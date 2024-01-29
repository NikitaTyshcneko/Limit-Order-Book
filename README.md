**Stock Market Limit Order Book Web Application**

This Django-based web application simulates a stock market limit order book. Users can add buy and sell orders for stocks, match orders, and view the current state of the order book and transaction history. The application includes both a web UI and a RESTful API.


**Copy code**
```
git clone https://github.com/NikitaTyshcneko/Limit-Order-Book.git
cd limit-order-book
```

**Install dependencies:**
```
pip install -r requirements.txt
```
**Apply migrations:**
```
python manage.py makemigrations
python manage.py migrate
```

**Run the Django development server:**
```
python manage.py runserver
```

Access the web UI at http://127.0.0.1:8000 in your browser.

**API Endpoints**

GET /api/v1/orders/: Retrieve the order history.

POST /api/v1/orders/: Add a new order.

GET /api/v1/stocks/: Retrieve the stocks.

POST /api/v1/stocks/: Add a new stocks.

GET /api/v1/transactions/: Retrieve the transaction history.

**Enhanced UI**
An enhanced user interface is developed using React.

**Testing**
```
python manage.py test
```

**Dockerization**
The application is containerized using Docker for easy deployment and scalability. Use the provided Dockerfile to build the Docker image.
```
docker-compose up --build 
```
