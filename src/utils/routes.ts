import path from "path";

export const getCurrentLocationDetailsTab = (pathname: string) => {
  const pathnameArray = pathname.split("/");
  let currentTab: string | unknown;
  if (pathnameArray.length === 3) {
    currentTab = "Overview";
  } else if (pathnameArray?.[3] === "displays") {
    currentTab = "Displays";
  } else if (pathnameArray?.[3] === "photos") {
    currentTab = "Photos";
  } else if (pathnameArray?.[3] === "visits") {
    currentTab = "Visits";
  }

  return currentTab;
};

export const getCurrentLocationDetailsBasePath = (pathname: string) => {
  const pathnameArray = pathname.split("/");
  if (pathnameArray.length === 3) {
    return pathname;
  } else {
    return pathnameArray.slice(0, 3).join("/");
  }
};
