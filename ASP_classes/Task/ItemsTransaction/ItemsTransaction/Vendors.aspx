<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Vendors.aspx.cs" Inherits="ItemsTransaction.WebForm2" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <title>Vendors Management</title>
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
                            <a class="nav-link" href="Items.aspx">Items</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="departments.aspx">Departments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="Vendors.aspx">Vendors</a>
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

                    <h3 class="text-center mb-4">Vendors Management</h3>

                    <!-- Form for Vendor Management -->
                    <div class="card p-4">
                        <div class="mb-3">
                            <label for="vendor_name_box" class="form-label">Vendor Name</label>
                            <asp:TextBox ID="vendor_name_box" runat="server" CssClass="form-control"></asp:TextBox>
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
                            <label for="vendor_id_box" class="form-label">Vendor ID (for Update/Delete)</label>
                            <asp:TextBox ID="vendor_id_box" runat="server" CssClass="form-control"></asp:TextBox>
                        </div>

                        <!-- Action Buttons -->
                        <div class="d-flex justify-content-center gap-3 mt-4">
                            <asp:Button ID="add_btn" runat="server" Text="Add Vendor" CssClass="btn btn-primary" OnClick="add_btn_Click" />
                            <asp:Button ID="update_btn" runat="server" Text="Update Vendor" CssClass="btn btn-warning" OnClick="update_btn_Click" />
                            <asp:Button ID="delete_btn" runat="server" Text="Delete Vendor" CssClass="btn btn-danger" OnClick="delete_btn_Click" />
                            <asp:Button ID="find_btn" runat="server" Text="Find Vendor" CssClass="btn btn-info" OnClick="find_btn_Click" />
                        </div>
                    </div>

                    <!-- Vendor List -->
                    <div class="mt-4">
                        <h3>Vendors List</h3>
                        <asp:Repeater ID="vendorRepeater" runat="server">
                            <HeaderTemplate>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Vendor ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile Number</th>
                                            <th>Item Name</th>
                                            <th>Registration Date</th>
                                            <th>Modification Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("Vendor_ID") %></td>
                                    <td><%# Eval("Name") %></td>
                                    <td><%# Eval("Email") %></td>
                                    <td><%# Eval("MobileNumber") %></td>
                                    <td><%# Eval("ItemName") %></td>
                                    <td><%# Eval("RegistrationDate") %></td>
                                    <td><%# Eval("ModificationDate") %></td>
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
