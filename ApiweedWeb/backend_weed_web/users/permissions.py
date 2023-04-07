from rest_framework import permissions


class IsOwnerPermission(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Allow access if the user is the owner of the object        
        return obj.id == request.user.id