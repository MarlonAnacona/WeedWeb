export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string | null;
    category?: string;
    image?: string;
    rating?: number;
}