<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Departments.aspx.cs" Inherits="ItemsTransaction.WebForm3" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <title>Departments Management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body style="background-color: lightblue;">
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
                            <a class="nav-link" href="Items.aspx">Items</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="Departments.aspx">Departments</a>
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

        <div class="container-fluid mt-5">
            <div class="container-fluid px-5 row">
                <!-- Departments Form -->
                <div class="col-md-6">
                    <h3 class="text-center mb-4">Departments Management</h3>
                    <div class="card p-4">
                        <div class="mb-3">
                            <label for="department_name_box" class="form-label">Department Name</label>
                            <asp:TextBox ID="department_name_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <div class="mb-3">
                            <label for="email_box" class="form-label">Email</label>
                            <asp:TextBox ID="email_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <div class="mb-3">
                            <label for="mobile_number_box" class="form-label">Mobile Number</label>
                            <asp:TextBox ID="mobile_number_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <div class="mb-3">
                            <label for="item_name_box" class="form-label">Item Name</label>
                            <asp:TextBox ID="item_name_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <div class="mb-3">
                            <label for="department_id_box" class="form-label">Department ID (for Update/Delete)</label>
                            <asp:TextBox ID="department_id_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <!-- Action Buttons -->
                        <div class="d-flex justify-content-center gap-3 mt-4">
                            <asp:Button ID="add_btn" runat="server" Text="Add Department" CssClass="btn btn-primary" OnClick="add_btn_Click" />
                            <asp:Button ID="update_btn" runat="server" Text="Update Department" CssClass="btn btn-warning" OnClick="update_btn_Click" />
                            <asp:Button ID="delete_btn" runat="server" Text="Delete Department" CssClass="btn btn-danger" OnClick="delete_btn_Click" />
                            <asp:Button ID="find_btn" runat="server" Text="Find Department" CssClass="btn btn-info" OnClick="find_btn_Click" />
                        </div>
                    </div>
                </div>

                <!-- Departments List -->
                <div class="col-md-6">
                    <h3 class="text-center mb-4">Departments List</h3>
                    <div>
                        <asp:Repeater ID="departmentRepeater" runat="server">
                            <HeaderTemplate>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Department ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile Number</th>
                                            <th>Item Name</th>
                                            <th>Item ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("DepartmentID") %></td>
                                    <td><%# Eval("Name") %></td>
                                    <td><%# Eval("Email") %></td>
                                    <td><%# Eval("MobileNumber") %></td>
                                    <td><%# Eval("ItemName") %></td>
                                    <td><%# Eval("ID") %></td>
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
