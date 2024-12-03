<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Project_Category.WebForm1" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Category</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center"><u>Product Category Selection</u></h2>
        <form method="post" runat="server">
            <div class="mb-3">
                <label for="category" class="form-label">Select Category</label>
                <asp:DropDownList ID="category_dropdown" runat="server" class="form-control">
                    <asp:ListItem Text="Furniture" Value="1" />
                    <asp:ListItem Text="Stationary" Value="2" />
                </asp:DropDownList>
            </div>
            <asp:Button ID="submit_button" runat="server" Text="Submit" CssClass="btn btn-primary" OnClick="SubmitButton_Click" />
            <asp:Button ID="new" runat="server" Text="Button" OnClick="new"  />
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
