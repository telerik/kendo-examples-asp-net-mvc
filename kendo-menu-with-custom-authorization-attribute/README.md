### PROJECT DESCRIPTION
The code library shows how to use Menu widget to navigate to different views. Menu show/hides menu items depending on the user authentication.

In the project three custom authorize attributes are used:

1. **AllowAnonymousAttribute** - allows the decorated Action method to all users
2. **GroupAuthorizeAttribute** - verifies whether the logged in user is allowed to see this view. This attribute extends default behavior of AuthorizeAttribute and allows to define multiple roles
3. **CustomUnauthorizedActionResult** - this attribute should be used when you want to hide menu item and still navigate to a normal view, which gives some information to the unauthorized users.

The project also shows how to use Menu widget to navigate to different areas.

#####Requirements
<table>
	<tr>
		<td>Kendo UI Suite and Version</td>
		<td>2012.3.1315</td>
	</tr>
	<tr>
		<td>jQuery Version</td>
		<td>1.8.2</td>
	</tr>
	<tr>
		<td>Supported Browsers and Platforms</td>
		<td>All support browsers by Kendo UI</td>
	</tr>
	<tr>
		<td>Components/Widgets used</td>
		<td>Menu</td>
	</tr>
	<tr>
		<td>ASP.NET MVC</td>
		<td>3.0</td>
	</tr>
</table>