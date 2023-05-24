from typing import Dict, Any
import json
import requests

## We are using the open meteo weather api

OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/forecast?'


def open_meteo_get_data(latitude: float, longitude: float, **url_params) -> Dict[str, Any]:
    """ this function makes requests to the open meteo forecast api, to see the url params you can use
        check their website, https://open-meteo.com/en/docs 
    """

    url_params['latitude'] = latitude
    url_params['longitude'] = longitude

    try:
        response = requests.get(OPEN_METEO_BASE_URL, params=url_params)
        response.raise_for_status()
        data = response.json()

        # Process and return the requested data
        return {'data': data, 'status_code': response.status_code}

    except requests.exceptions.HTTPError as err:
        return {'error': err, 'status_code': response.status_code}
    except json.JSONDecodeError as err:
        return {'error': err, 'status_code': response.status_code}
    except Exception as err:
        return {'error': err, 'status_code': response.status_code}
    



   

