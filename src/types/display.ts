export interface Display {
    id: number;
    name: string;
    planogram_uri?: string;
}

export interface DisplayProducts {
    id: number;
    product_id: number;
    display_id: number;
    quantity_on_hand: number;
    facings: number;
}

export interface DisplayPlanograms {
    id: number;
    display_id: number;
    quantity_on_hand: number;
    facings: number;
}