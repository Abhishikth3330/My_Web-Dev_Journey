<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstForm.aspx.cs" Inherits="Practice_Web_Application.FirstForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HOME PAGE IT_NETWORKZ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container mt-5 mb-5">
            <h1 class="py-3">Registration Form</h1>

            <!-- Name -->
            <div class="form-group">
                <label for="nameBox">Full Name</label>
                <asp:TextBox ID="name_box" runat="server" CssClass="form-control" Placeholder="Enter your full name"></asp:TextBox>
            </div>

            <!-- Email -->
            <div class="form-group mt-3">
                <label for="emailBox">Email Address</label>
                <asp:TextBox ID="email_box" runat="server" CssClass="form-control" Placeholder="Enter your email"></asp:TextBox>
            </div>

            <!-- Mobile Number -->
            <div class="form-group mt-3">
                <label for="mobileBox">Mobile Number</label>
                <asp:TextBox ID="mobile_box" runat="server" CssClass="form-control" Placeholder="Enter your mobile number"></asp:TextBox>
            </div>

            <!-- Password -->
            <div class="form-group mt-3">
                <label for="passwordBox">Password</label>
                <asp:TextBox ID="password_box" runat="server" CssClass="form-control" Placeholder="Enter your password"></asp:TextBox>
            </div>


            <!-- Registration Date -->
            <div class="form-group mt-3">
                <label for="registrationDate">Registration Date</label>
                <asp:TextBox ID="registration_date_box" runat="server" CssClass="form-control" TextMode="Date"></asp:TextBox>
            </div>

            <!-- Submit -->
            <div class="py-3 text-center">
                <asp:Button ID="Button1" runat="server" CssClass="btn btn-primary px-4" Text="Submit" OnClick="Button1_Click"/>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </form>
</body>
</html>
