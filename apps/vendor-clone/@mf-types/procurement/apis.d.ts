
    export type RemoteKeys = 'procurement/Module';
    type PackageType<T> = T extends 'procurement/Module' ? typeof import('procurement/Module') :any;