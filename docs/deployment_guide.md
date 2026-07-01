# Deployment Guide

## Requirements

Python 3.12

Node.js 20

Docker

PostgreSQL

## Run Backend

uvicorn src.api.app:app --reload

## Run Frontend

cd frontend

npm start

## Run Docker

docker compose up -d