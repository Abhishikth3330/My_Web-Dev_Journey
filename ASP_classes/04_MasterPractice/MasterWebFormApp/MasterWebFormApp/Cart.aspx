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
                        <tr>
                            <td><img src="images/product1.png" alt="Product" style="width: 50px; height: 50px;"></td>
                            <td>Men's Shirt</td>
                            <td>
                                <input type="number" class="form-control" value="1" min="1" style="width: 70px;">
                            </td>
                            <td>$75</td>
                            <td>$75</td>
                            <td>
                                <button class="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
                        <!-- Additional rows for more products -->
                    </tbody>
                </table>
            </div>

            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="user_details">
                        <h5>User Details</h5>
                        <form>
                            <div class="form-group">
                                <label for="userName">Name:</label>
                                <input type="text" id="userName" class="form-control" placeholder="Enter your name" readonly>
                            </div>
                            <div class="form-group">
                                <label for="userEmail">Email:</label>
                                <input type="email" id="userEmail" class="form-control" placeholder="Enter your email" readonly>
                            </div>
                            <div class="form-group">
                                <label for="userAddress">Address:</label>
                                <textarea id="userAddress" class="form-control" placeholder="Enter your address" rows="3" readonly></textarea>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="cart_summary">
                        <h5>Cart Summary</h5>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Subtotal:
                                <span>$75</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Shipping:
                                <span>$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Total:
                                <span>$80</span>
                            </li>
                        </ul>
                        <button class="btn btn-primary btn-block mt-3">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end cart section -->

</asp:Content>
