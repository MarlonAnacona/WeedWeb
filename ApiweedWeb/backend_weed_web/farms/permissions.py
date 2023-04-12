from rest_framework import permissions 


class IsFarmOwnerPermission(permissions.BasePermission):
    def has_object_permissions(self, request, view, obj):
        # Allow access if the user is the owner of the object
        return obj.user_id == request.user.id

class IsParcelOwnerPermission(permissions.BasePermission):
    def has_object_permissions(self, request, view, obj):
        # Allow access if the user is the owner of the object
        return obj.farm_id.user_id == request.user.id