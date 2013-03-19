using System;

namespace KendoMenuWithCustomAuthorizationAttr.AuthorizationAttributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
    public sealed class AllowAnonymousAttribute : Attribute
    {
    }
}