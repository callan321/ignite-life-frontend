export interface NavigationItem {
    name: string;
    href: string;
}

export interface NavigationIcon {
    name: string;
    href: string;
    d: string;
}

export interface Navigation {
    main: NavigationItem[];
    social: NavigationIcon[];
}
