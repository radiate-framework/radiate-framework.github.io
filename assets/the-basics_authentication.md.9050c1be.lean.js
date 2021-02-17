import{r as n,o as a,c as s,a as t,w as e,d as o,b as p}from"./app.d6b3e7a3.js";const c='{"title":"Authentication","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Check If The User Is Authenticated","slug":"check-if-the-user-is-authenticated"},{"level":2,"title":"Retrieving The Authenticated User","slug":"retrieving-the-authenticated-user"},{"level":3,"title":"Get The User from The Request","slug":"get-the-user-from-the-request"},{"level":2,"title":"Protecting Routes","slug":"protecting-routes"},{"level":2,"title":"Manually Authenticating Users","slug":"manually-authenticating-users"},{"level":2,"title":"Logging Out","slug":"logging-out"}],"relativePath":"the-basics/authentication.md","lastUpdated":1613601265224}',u={},i=o('',8),l=t("p",null,[p("Even though it is possible to determine if a user is authenticated using the check method, you will typically use a middleware to verify that the user is authenticated. To learn more about this, check out the documentation on "),t("a",{href:"#protecting-routes"},"protecting routes"),p(".")],-1),r=o('',5),d=t("p",null,[p("REST API routes are stateless so the "),t("code",null,"user"),p(" method will always return false when called from an "),t("code",null,"api"),p(" route.")],-1),h=o('',10);u.render=function(o,p,c,u,k,g){const m=n("AppNotice");return a(),s("div",null,[i,t(m,{type:"info"},{default:e((()=>[l])),_:1}),r,t(m,{type:"warning"},{default:e((()=>[d])),_:1}),h])};export default u;export{c as __pageData};