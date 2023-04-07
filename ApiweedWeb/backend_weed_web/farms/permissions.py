from rest_framework import permissions 


class isOwnerPermissions(permissions.BasePermissions):
    def has_object_permissions(self, request, view, obj):
        # Allow access if the user is the owner of the object
        return obj.id == request.user.id