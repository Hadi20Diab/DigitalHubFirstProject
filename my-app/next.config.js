/**
 * Ensure Turbopack/Next infers the correct workspace root when multiple lockfiles exist.
 * Setting `turbopack.root` tells Next which directory to treat as the workspace root.
 */
/** @type {import('next').NextConfig} */
module.exports = {
    turbopack: {
        // '.' means the current package (my-app) is the turbopack root
        root: '.'
    }
};
