<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstForm.aspx.cs" Inherits="Practice_Web_Application.FirstForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HOME PAGE IT_NETWORKZ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container py-2">
            <h3 class="py-1">Registration Form</h3>

            <!-- ID -->
            <div class="form-group">
                <label for="idBox">ID</label>
                <asp:TextBox ID="id_box" runat="server" CssClass="form-control" Placeholder="Enter ID"></asp:TextBox>
            </div>

            <!-- Name -->
            <div class="form-group mt-3">
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

            <!-- State -->
            <div class="form-group mt-3">
                <label for="stateBox">State</label>
                <asp:TextBox ID="state_box" runat="server" CssClass="form-control" Placeholder="Enter your state"></asp:TextBox>
            </div>

            <!-- City -->
            <div class="form-group mt-3">
                <label for="cityBox">City</label>
                <asp:TextBox ID="city_box" runat="server" CssClass="form-control" Placeholder="Enter your city"></asp:TextBox>
            </div>

            <!-- Address -->
            <div class="form-group mt-3">
                <label for="addressBox">Address</label>
                <asp:TextBox ID="address_box" runat="server" CssClass="form-control" Placeholder="Enter your address"></asp:TextBox>
            </div>

            <!-- Pincode -->
            <div class="form-group mt-3">
                <label for="pincodeBox">Pincode</label>
                <asp:TextBox ID="pincode_box" runat="server" CssClass="form-control" Placeholder="Enter your pincode"></asp:TextBox>
            </div>

            <!-- Registration Date -->
            <div class="form-group mt-3">
                <label for="registrationDate">Registration Date</label>
                <asp:TextBox ID="registration_date_box" runat="server" CssClass="form-control" TextMode="Date"></asp:TextBox>
            </div>
            
            <!-- Submit and Find Details -->
            <div class="py-3 text-center">
                <asp:Button ID="Button1" runat="server" CssClass="btn btn-primary px-4" Text="Submit" OnClick="Button1_Click"/>
                <asp:Button ID="FindDetailsButton" runat="server" CssClass="btn btn-warning px-4" Text="Find" OnClick="FindDetailsButton_Click"/>
                <asp:Button ID="Update" runat="server" CssClass="btn btn-secondary px-4" Text="Update" OnCLick="Update_Click"/>
                <asp:Button ID="Delete" runat="server" CssClass="btn btn-danger px-4" Text="Delete" Onclick="Delete_Click"/>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </form>
</body>
</html>
