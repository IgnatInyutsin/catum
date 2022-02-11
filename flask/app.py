import os
from flask import Flask, jsonify, request, Response
import migrations
import json

app = Flask(__name__)

# Обработка запросов на разные адреса
@app.route('/api/migrations')
def migration():
    # Запускаем миграцию
    migrations.main()
    resp = Response("Complete!")
    #Ставим заголовки
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0')