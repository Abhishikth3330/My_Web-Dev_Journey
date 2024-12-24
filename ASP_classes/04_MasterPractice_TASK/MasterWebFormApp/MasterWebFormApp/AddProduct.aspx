<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="AddProduct.aspx.cs" Inherits="MasterWebFormApp.AddProduct" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- inner page section -->
    <section class="inner_page_head">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="full text-center">
                        <h3>Add Product</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- add product form section -->
    <section class="product_section layout_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card p-4">
                        <div id="ProductForm" runat="server">
                            <div>
                                <asp:Label AssociatedControlID="txtProductName" Text="Product Name" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtProductName" CssClass="form-control" Placeholder="Enter product name" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvProductName" ControlToValidate="txtProductName" ErrorMessage="Product Name is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>

                            <div>
                                <asp:Label AssociatedControlID="txtPrice" Text="Price" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtPrice" CssClass="form-control" Placeholder="Enter product price" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvPrice" ControlToValidate="txtPrice" ErrorMessage="Price is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>

                            <div>
                                <asp:Label AssociatedControlID="txtQuantity" Text="Quantity" CssClass="form-label" runat="server"></asp:Label>
                                <asp:TextBox ID="txtQuantity" CssClass="form-control" Placeholder="Enter product quantity" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="rfvQuantity" ControlToValidate="txtQuantity" ErrorMessage="Quantity is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>

                            <div>
                                <asp:Label AssociatedControlID="fuProductImage" Text="Product Image" CssClass="form-label" runat="server"></asp:Label>
                                <asp:FileUpload ID="fuProductImage" CssClass="form-control" runat="server" />
                                <asp:RequiredFieldValidator ID="rfvProductImage" ControlToValidate="fuProductImage" ErrorMessage="Product Image is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>

                            <div>
                                <asp:Label AssociatedControlID="ddlCategory" Text="Category" CssClass="form-label" runat="server"></asp:Label>
                                <asp:DropDownList ID="ddlCategory" CssClass="form-select" runat="server">
                                    <asp:ListItem Text="Select Category" Value="0" Selected="True"></asp:ListItem>
                                </asp:DropDownList>
                                <asp:RequiredFieldValidator ID="rfvCategory" ControlToValidate="ddlCategory" InitialValue="0" ErrorMessage="Category is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>

                            <div class="text-center">
                                <asp:Button ID="btnAddProduct" CssClass="btn btn-primary w-100" Text="Add Product" runat="server" OnClick="btnAddProduct_Click" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
