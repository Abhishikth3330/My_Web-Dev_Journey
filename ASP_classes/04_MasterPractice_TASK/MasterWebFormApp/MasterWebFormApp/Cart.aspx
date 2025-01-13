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
                                    <td>
                                        <img src='<%# Page.ResolveUrl(Eval("ProductImage").ToString()) %>' alt='<%# Eval("ProductName") %>' style="width: 100px; height: 100px;" />
                                    </td>

                                    <td><%# Eval("ProductName") %></td>
                                    <td>
                                        <div class="input-group">
                                            <!-- Decrease Quantity Button -->
                                            <div class="input-group-prepend">
                                                <asp:Button ID="btnDecrease" runat="server" Text="-" CssClass="btn btn-outline-secondary" CommandArgument='<%# Eval("CartID") %>' OnClick="DecreaseButton_Click" />
                                            </div>
                    
                                            <!-- Quantity TextBox -->
                                            <asp:TextBox ID="txtQuantity" runat="server" Text='<%# Eval("Quantity") %>' CssClass="form-control text-center" ReadOnly="true" />
                    
                                            <!-- Increase Quantity Button -->
                                            <div class="input-group-append">
                                                <asp:Button ID="btnIncrease" runat="server" Text="+" CssClass="btn btn-outline-secondary" CommandArgument='<%# Eval("CartID") %>' OnClick="IncreaseButton_Click" />
                                            </div>
                                        </div>
                                        <asp:HiddenField ID="hfCartItemID" runat="server" Value='<%# Eval("CartID") %>' />
                                    </td>
                                    <td>$<%# Eval("Price") %></td>
                                    <td>$<%# Eval("Total") %></td>
                                    <td>
                                        <asp:Button ID="btnRemove" runat="server" Text="Remove" CssClass="btn btn-danger btn-sm" CommandArgument='<%# Eval("CartID") %>' OnClick="RemoveButton_Click" />
                                    </td>
                                </tr>
                            </ItemTemplate>
                        </asp:Repeater>


                    </tbody>
                </table>
            </div>

            <div class="subtotal-section">
                <label for="lblSubtotal">Subtotal:</label>
                <asp:Label ID="Label1" runat="server" CssClass="subtotal-label"></asp:Label>
            </div>


            <div class="cart_summary">
                <h4>Cart Summary</h4>
                <p><strong>Subtotal:</strong> <asp:Label ID="lblSubtotal" runat="server" CssClass="subtotal-label"></asp:Label></p>
            </div>




        </div>
    </section>
    <!-- end cart section -->

</asp:Content>
