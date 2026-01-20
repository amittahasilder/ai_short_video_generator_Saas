// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: [
//     "/((?!_next|.*\\.(?:css|js|json|jpg|jpeg|png|gif|svg|ico|woff2?|ttf)).*)",
//   ],
// };


import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:css|js|json|jpg|jpeg|png|gif|svg|ico|woff2?|ttf)).*)",
  ],
};
