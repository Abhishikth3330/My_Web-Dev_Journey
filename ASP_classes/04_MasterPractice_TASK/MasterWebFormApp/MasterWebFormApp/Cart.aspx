<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Cart.aspx.cs" Inherits="MasterWebFormApp.Cart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- inner page section -->
    <section class="inner_page_head">
        <div class="container_fuild">
            <div class="row">
                <div class="col-md-12">
                    <div class="full">
                        <h3>Shopping Cart</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end inner page section -->

    <!-- cart section -->
    <section class="cart_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>Your <span>Cart</span></h2>
            </div>


            <!-- User Details Section -->
            <div class="user_details">
                <h3>User Information</h3>
                <div class="form-group">
                    <label for="txtUserName">Name</label>
                    <asp:TextBox ID="txtUserName" runat="server" CssClass="form-control" ReadOnly="true" />
                </div>
                <div class="form-group">
                    <label for="txtUserEmail">Email</label>
                    <asp:TextBox ID="txtUserEmail" runat="server" CssClass="form-control" ReadOnly="true" />
                </div>
                <div class="form-group">
                    <label for="txtUserAddress">Address</label>
                    <asp:TextBox ID="txtUserAddress" runat="server" CssClass="form-control" TextMode="MultiLine" ReadOnly="true" />
                </div>
            </div>



            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <asp:Repeater ID="rptCart" runat="server">
                            <ItemTemplate>
                                <tr>
                                    <td><img src='<%# Eval("ProductImage") %>' alt="Product" style="width: 50px; height: 50px;"></td>
                                    <td><%# Eval("ProductName") %></td>
                                    <td>
                                        <asp:TextBox ID="txtQuantity" runat="server" Text='<%# Eval("Quantity") %>' CssClass="form-control" OnTextChanged="Quantity_TextChanged" AutoPostBack="true" />
                                    </td>
                                    <td>$<%# Eval("Price") %></td>
                                    <td>$<%# Eval("Total") %></td> 
                                    <%-- need to write the code to get the total amount in the C#, need to use the price of one product and then multiply it with the given price
                                       also add the sub total to get the total price --%>
                                    <td>
                                        <asp:Button ID="btnRemove" runat="server" Text="Remove" CssClass="btn btn-danger btn-sm" CommandArgument='<%# Eval("CartItemID") %>' OnClick="RemoveButton_Click" />
                                    </td>
                                </tr>
                            </ItemTemplate>
                        </asp:Repeater>
                    </tbody>
                </table>
            </div>




        </div>
    </section>
    <!-- end cart section -->

</asp:Content>
