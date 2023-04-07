from django_filters import rest_framework as filters
from .models import Farm, Parcel
from ..seeds.models import Seeds




class FarmFilters(filters.FilterSet):

    """
    A FilterSet class for filtering instances of the `Farm` model.
    Provides filters for the `user_id`, `farm_name`, `longitude`, `latitude`, and `date_creation_farm` fields.
    """

    user_id = filters.NumberFilter(field_name = "user_id", lookup_expr = "iexact")
    farm_name = filters.CharFilter(field_name = "farm_name", lookup_expr = "icontains")
    longitude = filters.NumberFilter(field_name = "longitude", lookup_expr = "iexact")
    latitude = filters.NumberFilter(field_name = "latitude", lookup_expr = "iexact")
    date_creation_farm = filters.DateFilter(field_name = "date_creation_farm", lookup_expr = "iexact")

    class Meta:
        model = Farm
        fields = ["user_id", "farm_name", "longitude", "latitude", "date_creation_farm"]


class ParcelFilters(filters.FilterSet):

    """
    A FilterSet class for filtering instances of the `Parcel` model.
    Provides filters for the `farm_id`, `seed_id`, `width`, `length`, `crop_modality`, and `date_creation_parcel` fields.
    """

    CHOICES_CROP_MODALITY = (('Outdoor', 'Outdoor'), ('Indoor', 'Indoor'))

    farm_id = filters.NumberFilter(field_name = "farm_id", lookup_expr = "iexact")
    seed_id = filters.NumberFilter(field_name = "seed_id", lookup_expr = "iexact")
    width = filters.NumberFilter(field_name = "width", lookup_expr = "iexact")
    length = filters.NumberFilter(field_name = "length", lookup_expr = "iexact")
    crop_modality = filters.ChoiseFilter(choices = CHOICES_CROP_MODALITY)
    date_creation_parcel = filters.DateFilter(field_name = "date_creation_parcel", lookup_expr = "iexact")

    class Meta:
        model = Parcel
        fields = ["farm_id", "seed_id", "width", "length", "crop_modality", "date_creation_parcel"]



