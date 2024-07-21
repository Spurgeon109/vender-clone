
    export type RemoteKeys = 'intelligence/Module';
    type PackageType<T> = T extends 'intelligence/Module' ? typeof import('intelligence/Module') :any;