﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="test_form.aspx.cs" Inherits="NEW_Form.test_form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Product Category Selection</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body style="background-color: #87f0fa;">
    <form id="form1" runat="server">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">

                    <h3 class="text-center mb-4">Product Category Selection</h3>
                    

                    <div class="mb-3">
                        <label for="id_box" class="form-label">Product ID</label>
                        <asp:TextBox ID="id_box" runat="server" CssClass="form-control" Placeholder="Enter Product ID"></asp:TextBox>
                    </div>

                    <!-- Category Dropdown -->
                    <div class="mb-3">
                        <label for="ddl_category" class="form-label">Category</label>
                        <asp:DropDownList ID="ddl_category" runat="server" class="form-control nice-select wide">
                            <asp:ListItem Text="Select Category" Value="0"></asp:ListItem>
                            <asp:ListItem Text="Furniture" Value="1"></asp:ListItem>
                            <asp:ListItem Text="Stationary" Value="2"></asp:ListItem>
                            <asp:ListItem Text="Electronics" Value="3"></asp:ListItem>
                        </asp:DropDownList>
                    </div>

                    <!-- Product Name Input -->
                    <div class="mb-3">
                        <label for="product_box" class="form-label">Product Name</label>
                        <asp:TextBox ID="product_box" runat="server" CssClass="form-control" Placeholder="Enter product name"></asp:TextBox>
                    </div>

                    <!-- Action Buttons -->
                    <div class="d-flex justify-content-center gap-3">
                        <asp:Button ID="submit_btn" runat="server" Text="Submit" CssClass="btn btn-primary" OnClick="submit_btn_Click"/>
                        <asp:Button ID="find_btn" runat="server" Text="Find" CssClass="btn btn-info" OnClick="find_btn_Click"/>
                        <asp:Button ID="update_btn" runat="server" Text="Update" CssClass="btn btn-warning" OnClick="update_btn_Click" />
                        <asp:Button ID="delete_btn" runat="server" Text="Delete" CssClass="btn btn-danger" OnClick="delete_btn_Click" />
                        
                    </div>


                    <div class="mt-4">
                        <asp:Repeater ID="productRepeater" runat="server">
                            <HeaderTemplate>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Category</th>
                                            <th>Product Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("Id") %></td>
                                    <td><%# Eval("Category") %></td>
                                    <td><%# Eval("Product") %></td>
                                </tr>
                            </ItemTemplate>
                            <FooterTemplate>
                                    </tbody>
                                </table>
                            </FooterTemplate>
                        </asp:Repeater>
                    </div>

                </div>
            </div>
        </div>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>