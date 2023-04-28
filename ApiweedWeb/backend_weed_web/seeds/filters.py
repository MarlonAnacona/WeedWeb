from django_filters import rest_framework as filters
from .models import Seeds, GrowingInfo


class GrowFilter(filters.filterSet):
    CHOICES_DIFICULTY = (('Low', 'Low'), ('Medium low', 'Medium low'), ('Medium', 'Medium'),
                        ('Medium high', 'Medium high'), ('High', 'High'), ('Very high', 'Vey high'))
    seed_id = filters.NumberFilter(field_name="seed_id", lookup_expr="exact")
    flowering_time = filters.NumberFilter(
        field_name="flowering_time", lookup_expr="exact")
    harvest_time = filters.NumberFilter(
        field_name="harvest_time", lookup_expr="exact")
    grow_dificulty = filters.ChoiceFilter(choices=CHOICES_DIFICULTY)
    yield_outdoor = filters.NumberFilter(
        field_name="yield_outdoor", lookup_expr="exact")
    yield_indoor = filters.NumberFilter(
        field_name="yield_indoor", lookup_expr="exact")

    class Meta:
        model = GrowingInfo
        fields = ["seed_id", "flowering_time", "harvest_time",
                "grow_dificulty", "yield_outdoor", "yield_indoor"]
