interface RouteParams<T> {
  params: T;
}

interface CompanyLocationsRouteParams {
  companyId: number;
}

export type CompanyLocationsRoute = RouteParams<CompanyLocationsRouteParams>;
