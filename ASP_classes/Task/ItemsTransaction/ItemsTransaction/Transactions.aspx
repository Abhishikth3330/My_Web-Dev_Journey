<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Transactions.aspx.cs" Inherits="ItemsTransaction.Transactions" %>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Transactions Management</title>
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
                        <li class="nav-item"><a class="nav-link" href="Items.aspx">Items</a></li>
                        <li class="nav-item"><a class="nav-link" href="Departments.aspx">Departments</a></li>
                        <li class="nav-item"><a class="nav-link" href="Vendors.aspx">Vendors</a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="Transactions.aspx">Transactions</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End Navbar -->

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-5">
                    <h3 class="text-center mb-4">Manage Transactions</h3>

                    <!-- Item Name -->
                    <div class="mb-3">
                        <label for="itemName" class="form-label">Item Name</label>
                        <asp:TextBox ID="itemName" runat="server" CssClass="form-control" Placeholder="Enter Item Name"></asp:TextBox>
                        <asp:Button ID="btnFind" runat="server" Text="Find" CssClass="btn btn-primary mt-2" OnClick="btnFind_Click" />
                    </div>

                    <!-- Balance Quantity -->
                    <div class="mb-3">
                        <label for="balanceQuantity" class="form-label">Balance Quantity</label>
                        <asp:TextBox ID="balanceQuantity" runat="server" CssClass="form-control" ReadOnly="True" Placeholder="Balance Quantity"></asp:TextBox>
                    </div>

                    <!-- Transaction Type -->
                    <div class="mb-3">
                        <label class="form-label">Transaction Type</label>
                        <div>
                            <asp:RadioButton ID="rbPurchase" runat="server" GroupName="TransactionType" Text="Purchase" CssClass="form-check-input me-2" OnCheckedChanged="rbPurchase_CheckedChanged" AutoPostBack="True" />
                            <asp:RadioButton ID="rbIssue" runat="server" GroupName="TransactionType" Text="Issue" CssClass="form-check-input" OnCheckedChanged="rbIssue_CheckedChanged" AutoPostBack="True" />
                        </div>
                    </div>

                    <!-- Vendor/Department Dropdown -->
                    <div class="mb-3">
                        <asp:DropDownList ID="ddlVendorDepartment" runat="server" CssClass="form-control">
                            <asp:ListItem Text="Select" Value="0"></asp:ListItem>
                        </asp:DropDownList>
                    </div>

                    <!-- Quantity -->
                    <div class="mb-3">
                        <label for="quantity" class="form-label">Quantity</label>
                        <asp:TextBox ID="quantity" runat="server" CssClass="form-control" Placeholder="Enter Quantity"></asp:TextBox>
                    </div>

                    <!-- Action Buttons -->
                    <div class="d-flex justify-content-center gap-3">
                        <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="btn btn-primary" OnClick="btnSubmit_Click" />
                    </div>
                </div>

                <!-- Repeater Section -->
                <div class="col-md-7">
                    <h3 class="text-center mb-4">Transactions</h3>
                    <asp:Repeater ID="transactionRepeater" runat="server">
                        <HeaderTemplate>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Type</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Vendor</th>
                                        <th>Department</th>
                                        <th>Balance Quantity</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                        </HeaderTemplate>
                        <ItemTemplate>
                            <tr>
                                <td><%# Eval("TransactionID") %></td>
                                <td><%# Eval("TransactionType") %></td>
                                <td><%# Eval("ItemName") %></td>
                                <td><%# Eval("Quantity") %></td>
                                <td><%# Eval("VendorName") %></td>
                                <td><%# Eval("DepartmentName") %></td>
                                <td><%# Eval("BalanceQuantity") %></td>
                                <td><%# Eval("TransactionDate") %></td>
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
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
