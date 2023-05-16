# Use an official Python runtime as a parent image
FROM python:3.10.6

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 8000 for the Django app
EXPOSE 8000

# Set environment variables
ENV DJANGO_SETTINGS_MODULE=backend_weed_web.settings
ENV PYTHONUNBUFFERED=1

# Run the command to start the Django app
CMD ["python3", "backend_weed_web/manage.py", "runserver", "0.0.0.0:8000"]