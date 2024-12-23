<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="MasterWebFormApp.Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- inner page section -->
    <section class="inner_page_head">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="full text-center">
                        <h3>User Registration</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- registration form section -->
    <section class="registration_section layout_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card p-4 shadow-sm">
                        <form id="RegistrationForm">
                            <div class="mb-3">
                                <asp:Label AssociatedControlID="txtName" Text="Full Name" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtName" CssClass="form-control" Placeholder="Enter your full name" runat="server" Required="true"></asp:TextBox>
                            </div>
                            <div class="mb-3">
                                <asp:Label AssociatedControlID="txtEmail" Text="Email" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtEmail" CssClass="form-control" Placeholder="Enter your email address" TextMode="Email" runat="server" Required="true"></asp:TextBox>
                            </div>
                            <div class="mb-3">
                                <asp:Label AssociatedControlID="txtPassword" Text="Password" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtPassword" CssClass="form-control" Placeholder="Enter your password" TextMode="Password" runat="server" Required="true"></asp:TextBox>
                            </div>
                            <div class="mb-3">
                                <asp:Label AssociatedControlID="txtMobile" Text="Mobile Number" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtMobile" CssClass="form-control" Placeholder="Enter your mobile number" runat="server" Required="true"></asp:TextBox>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <asp:Label AssociatedControlID="ddlState" Text="State" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:DropDownList ID="ddlState" CssClass="form-select" runat="server">
                                        <asp:ListItem Text="Select State" Value="" Selected="True"></asp:ListItem>
                                        <asp:ListItem Text="Maharashtra" Value="1"></asp:ListItem>
                                        <asp:ListItem Text="Kerala" Value="2"></asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <asp:Label AssociatedControlID="txtCity" Text="City" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:TextBox ID="txtCity" CssClass="form-control" Placeholder="Enter your city" runat="server" Required="true"></asp:TextBox>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <asp:Label AssociatedControlID="txtPincode" Text="Pincode" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:TextBox ID="txtPincode" CssClass="form-control" Placeholder="Enter your pincode" runat="server" Required="true"></asp:TextBox>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <asp:Label AssociatedControlID="ddlCountry" Text="Country" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:DropDownList ID="ddlCountry" CssClass="form-select" runat="server">
                                        <asp:ListItem Text="Select Country" Value="" Selected="True"></asp:ListItem>
                                        <asp:ListItem Text="India" Value="India"></asp:ListItem>
                                        <asp:ListItem Text="Other" Value="Japan"></asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="mb-3">
                                <asp:Label AssociatedControlID="txtAddress" Text="Address" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtAddress" CssClass="form-control" TextMode="MultiLine" Placeholder="Enter your address" runat="server" Required="true"></asp:TextBox>
                            </div>
                            <div class="text-center">
                                <asp:Button ID="btnRegister" CssClass="btn btn-primary w-100" Text="Register" runat="server" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
