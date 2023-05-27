from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .utils import open_meteo_get_data
# Create your views here.


class ForecastWeatherAPIView(APIView):
    allowed_methods = ['GET']

    def get(self, request):
        try:
            latitude = request.query_params.get('latitude', None)
            longitude = request.query_params.get('longitude', None)

            if(not latitude or not longitude):
                return Response({'Client Error': 'Missing required parameters latitude and longitude'},
                                status=status.HTTP_400_BAD_REQUEST
                                )

            remaining_params = {param: value for param, value in request.query_params.items()
                                if param not in ['latitude', 'longitude']}

            # Call the function to retrieve weather data
            weather_data = open_meteo_get_data(latitude, longitude, **remaining_params)
         
            if 'error' in weather_data:
                return Response({'error': str(weather_data['error'])}, status= weather_data['status_code'])

            return Response(weather_data['data'], status= weather_data['status_code'])


        except Exception as e:
            return Response({'error': str(e)}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)


        

        

        
