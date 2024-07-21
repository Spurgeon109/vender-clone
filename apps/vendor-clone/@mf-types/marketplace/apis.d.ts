
    export type RemoteKeys = 'marketplace/Module';
    type PackageType<T> = T extends 'marketplace/Module' ? typeof import('marketplace/Module') :any;