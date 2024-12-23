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
                    <div class="card p-4">
                        <div id="RegistrationForm" runat="server">
                            <div>
                                <asp:Label AssociatedControlID="txtName" Text="Full Name" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtName" CssClass="form-control" Placeholder="Enter your full name" runat="server" Required="true"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvName" ControlToValidate="txtName" ErrorMessage="Name is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>
                            <div>
                                <asp:Label AssociatedControlID="txtEmail" Text="Email" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtEmail" CssClass="form-control" Placeholder="Enter your email address" TextMode="Email" runat="server" style="text-transform:none;"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvEmail" ControlToValidate="txtEmail" ErrorMessage="Email is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="revEmail" ControlToValidate="txtEmail" ValidationExpression="^\S+@\S+\.\S+$" ErrorMessage="Enter a valid email address" CssClass="text-danger" runat="server"></asp:RegularExpressionValidator>
                            </div>
                            <div>
                                <asp:Label AssociatedControlID="txtPassword" Text="Password" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtPassword" CssClass="form-control" Placeholder="Enter your password" TextMode="Password" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvPassword" ControlToValidate="txtPassword" ErrorMessage="Password is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                <button type="button" onclick="togglePasswordVisibility()">peek</button>
                            </div>
                            <div>
                                <asp:Label AssociatedControlID="txtMobile" Text="Mobile Number" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtMobile" CssClass="form-control" Placeholder="Enter your mobile number" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvMobile" ControlToValidate="txtMobile" ErrorMessage="Mobile number is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="revMobile" ControlToValidate="txtMobile" ValidationExpression="^[0-9]{10}$" ErrorMessage="Enter a valid 10-digit mobile number" CssClass="text-danger" runat="server"></asp:RegularExpressionValidator>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <asp:Label AssociatedControlID="ddlState" Text="State" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:DropDownList ID="ddlState" CssClass="form-select" runat="server">
                                        <asp:ListItem Text="Select State" Value="" Selected="True"></asp:ListItem>
                                        <asp:ListItem Text="Maharashtra" Value="Maharashtra"></asp:ListItem>
                                        <asp:ListItem Text="Kerala" Value="Kerala"></asp:ListItem>
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="rfvState" ControlToValidate="ddlState" InitialValue="" ErrorMessage="State is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                </div>
                                <div class="col-md-6">
                                    <asp:Label AssociatedControlID="txtCity" Text="City" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:TextBox ID="txtCity" CssClass="form-control" Placeholder="Enter your city" runat="server"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="rfvCity" ControlToValidate="txtCity" ErrorMessage="City is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <asp:Label AssociatedControlID="txtPincode" Text="Pincode" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:TextBox ID="txtPincode" CssClass="form-control" Placeholder="Enter your pincode" runat="server"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="rfvPincode" ControlToValidate="txtPincode" ErrorMessage="Pincode is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                </div>
                                <div class="col-md-6">
                                    <asp:Label AssociatedControlID="ddlCountry" Text="Country" CssClass="form-label" runat="server"></asp:Label>
                                    <asp:DropDownList ID="ddlCountry" CssClass="form-select" runat="server">
                                        <asp:ListItem Text="Select Country" Value="" Selected="True"></asp:ListItem>
                                        <asp:ListItem Text="India" Value="India"></asp:ListItem>
                                        <asp:ListItem Text="Other" Value="Other"></asp:ListItem>
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="rfvCountry" ControlToValidate="ddlCountry" InitialValue="" ErrorMessage="Country is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                                </div>
                            </div>
                            <div>
                                <asp:Label AssociatedControlID="txtAddress" Text="Address" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtAddress" CssClass="form-control" TextMode="MultiLine" Placeholder="Enter your address" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvAddress" ControlToValidate="txtAddress" ErrorMessage="Address is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>
                            <div class="text-center">
                                <asp:Button ID="btnRegister" CssClass="btn btn-primary w-100" Text="Register" OnClick="btnRegister_Click" runat="server" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        function togglePasswordVisibility() {
            var passwordField = document.getElementById('<%= txtPassword.ClientID %>');
            if (passwordField.type === "password") {
                passwordField.type = "text";  // Show password
            } else {
                passwordField.type = "password";  // Hide password
            }
        }
    </script>
</asp:Content>
