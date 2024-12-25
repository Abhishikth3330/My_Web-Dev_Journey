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
            height: auto;
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
    <!-- Top Section: Email, Password, and Login Button -->
    <section class="container mt-3">
        <div class="row">
            <div class="col-md-12 text-end">
                <asp:TextBox ID="txtEmail" CssClass="form-control d-inline-block w-auto" Placeholder="Email" runat="server" style="text-transform:none;"></asp:TextBox>
                <asp:TextBox ID="txtPassword" CssClass="form-control d-inline-block w-auto" TextMode="Password" Placeholder="Password" runat="server"></asp:TextBox>
                <asp:Button ID="btnLogin" CssClass="btn btn-primary d-inline-block" Text="Login" runat="server" OnClick="btnLogin_Click" />
            </div>
        </div>
    </section>

    <!-- Category Selection: Mens | Womens -->
    <section class="container mt-4">
        <div class="row">
            <div class="col-md-12 text-center">
                <button class="btn btn-info" id="btnMens" onclick="showCategory('Mens')">Mens</button>
                <button class="btn btn-info" id="btnWomens" onclick="showCategory('Womens')">Womens</button>
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
                            <img src='<%# Page.ResolveUrl(Eval("ProductImage").ToString()) %>' alt="Product Image" class="product-image" />
                            <h5><%# Eval("ProductName") %></h5>
                            <p>Price: $<%# Eval("Price") %></p>
                            <input type="number" min="1" value="1" class="quantity-input" />
                            <button class="add-to-cart" onclick="addToCart(<%# Eval("ProductID") %>)">Add to Cart</button>
                        </div>
                    </div>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </section>

    <script>
        function showCategory(category) {
            // Logic to filter products by category and dynamically load them into the repeater
            // You can make an AJAX call or use server-side filtering to load the products dynamically based on the selected category
            console.log("Category selected:", category);
            // Example: Filter by category (Mens/Womens) and bind data accordingly
        }

        function addToCart(productId) {
            // Logic to add the selected product to the cart
            console.log("Product added to cart:", productId);
        }
    </script>
</asp:Content>
