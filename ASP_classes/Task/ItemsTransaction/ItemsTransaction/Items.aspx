<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Items.aspx.cs" Inherits="ItemsTransaction.WebForm1" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Product Category Selection</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body style="background-color: lightseagreen;">
    <form id="form1" runat="server">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><u>MyKart</u></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="Items.aspx">Items</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="departments.aspx">Departments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Vendors.aspx">Vendors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="transactions.aspx">Transactions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End Navbar -->

        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">

                    <h3 class="text-center mb-4">Product Category Selection</h3>

                    <!-- Form for Item Entry -->
                    <div class="card p-4">
                        <div class="mb-3">
                            <label for="id_box" class="form-label">Product ID</label>
                            <asp:TextBox ID="id_box" runat="server" CssClass="form-control" Placeholder="Enter Product ID"></asp:TextBox>
                        </div>

                        <div class="mb-3">
                            <label for="ddl_category" class="form-label">Category</label>
                            <asp:DropDownList ID="ddl_category" runat="server" CssClass="form-control">
                                <asp:ListItem Text="Select Category" Value="0"></asp:ListItem>
                                <asp:ListItem Text="Furniture" Value="1"></asp:ListItem>
                                <asp:ListItem Text="Stationary" Value="2"></asp:ListItem>
                                <asp:ListItem Text="Electronics" Value="3"></asp:ListItem>
                            </asp:DropDownList>
                        </div>

                        <div class="mb-3">
                            <label for="product_box" class="form-label">Product Name</label>
                            <asp:TextBox ID="product_box" runat="server" CssClass="form-control" Placeholder="Enter product name"></asp:TextBox>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="balance_quantity_box" class="form-label">Balance Quantity</label>
                                    <asp:TextBox ID="balance_quantity_box" runat="server" CssClass="form-control" Placeholder="Enter balance quantity"></asp:TextBox>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="rate_box" class="form-label">Rate</label>
                                    <asp:TextBox ID="rate_box" runat="server" CssClass="form-control" Placeholder="Enter rate"></asp:TextBox>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="d-flex justify-content-center gap-3 mt-4">
                            <asp:Button ID="submit_btn" runat="server" Text="Submit" CssClass="btn btn-primary" OnClick="submit_btn_Click" />
                            <asp:Button ID="find_btn" runat="server" Text="Find" CssClass="btn btn-info" OnClick="find_btn_Click" />
                            <asp:Button ID="update_btn" runat="server" Text="Update" CssClass="btn btn-warning" OnClick="update_btn_Click" />
                            <asp:Button ID="delete_btn" runat="server" Text="Delete" CssClass="btn btn-danger" OnClick="delete_btn_Click" />
                        </div>
                    </div>

                    <!-- Product List -->
                    <div class="mt-4">
                        <asp:Repeater ID="productRepeater" runat="server">
                            <HeaderTemplate>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Category</th>
                                            <th>Product Name</th>
                                            <th>Balance Quantity</th>
                                            <th>Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("ID") %></td>
                                    <td><%# Eval("Category") %></td>
                                    <td><%# Eval("ItemName") %></td>
                                    <td><%# Eval("BalanceQuantity") %></td>
                                    <td><%# Eval("RateOfItem") %></td>
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
