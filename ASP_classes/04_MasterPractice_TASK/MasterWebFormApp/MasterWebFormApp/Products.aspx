<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Products.aspx.cs" Inherits="MasterWebFormApp.Products1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <!-- Include Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        /* Custom CSS for product cards */
        .product-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }

        .product-card:hover {
            transform: scale(1.05);
        }

        .product-card img {
            max-width: 100%;
            height: 400px;
            border-radius: 8px;
        }

        .quantity-input {
            width: 60px;
            text-align: center;
            margin-top: 10px;
        }

        .add-to-cart {
            height: 50px;
            margin-top: 10px;
            padding: 8px 16px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .add-to-cart:hover {
            background-color: #218838;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Top Section: Email, Password -->
    <section class="container mt-3">
        <div class="row">
            <div class="col-md-12 text-end">
                <asp:TextBox ID="txtEmail" CssClass="form-control d-inline-block w-auto" Placeholder="Email" runat="server" style="text-transform:none;"></asp:TextBox>
                <asp:TextBox ID="txtPassword" CssClass="form-control d-inline-block w-auto" TextMode="Password" Placeholder="Password" runat="server"></asp:TextBox>
            </div>
        </div>
    </section>

    <!-- Product Cards Section -->
    <section class="container mt-4">
        <div class="row" id="productCards">
            <!-- Dynamically populated product cards will go here -->
            <asp:Repeater ID="rptProducts" runat="server">
                <ItemTemplate>
                    <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                        <div class="product-card">
                            <img src='<%# Page.ResolveUrl(Eval("ProductImage").ToString()) %>' alt='<%# Eval("ProductName") %>' />
                            <h3><%# Eval("ProductName") %></h3>
                            <p>Price: $<%# Eval("Price") %></p>

                            <!-- Quantity Input -->
                            <input type="number" id="quantity_<%# Eval("ProductID") %>" name="quantity_<%# Eval("ProductID") %>" value="1" min="1" />

                            <!-- Add to Cart Button -->
                            <asp:Button runat="server" Text="Add to Cart" CommandName="AddToCart" CommandArgument='<%# Eval("ProductID") %>' OnClick="btnAddToCart_Click" />
                        </div>
                    </div>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </section>

    <script>
        function addToCart(productId) {
            var quantity = document.getElementById('quantity_' + productId).value;
            window.location.href = 'Products.aspx?ProductID=' + productId + '&Quantity=' + quantity;
        }
    </script>
</asp:Content>
