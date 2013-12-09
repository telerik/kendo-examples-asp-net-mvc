# Description
Demonstrates how to create a server proxy in order to perform cross domain JSON requests.

# Usage

1. Copy the `Proxy` method from **HomeController.cs** to a controller in your project.
2. Set the [url](http://docs.kendoui.com/api/framework/datasource#configuration-transport.read.url) option to `Url.Action("Proxy", "YourController")"`.
3. Pass the desired URL via `transport.read.data.url`. The proxy will make a request to that URL and return the response.

        var dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "@Url.Action("Proxy", "Home"),
                    dataType: "json",
                    data: {
                        // URL to request
                        url: "https://api.github.com/search/repositories"
                    }
                }
            }
        });
4. Pass any other parameters via [transport.read.data](http://docs.kendoui.com/api/framework/datasource#configuration-transport.read.data).

        var dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "@Url.Action("Proxy", "Home"),
                    dataType: "json",
                    data: {
                        // URL to request (check http://developer.github.com/v3/search/#search-repositories)
                        url: "https://api.github.com/search/repositories"
                        // Parameter
                        q: "foo",
                        // Another parameter
                        sort: "stars"
                    }
                }
            }
        });



