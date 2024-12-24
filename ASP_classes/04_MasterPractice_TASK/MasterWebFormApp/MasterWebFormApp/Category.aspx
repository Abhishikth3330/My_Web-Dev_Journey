<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Category.aspx.cs" Inherits="MasterWebFormApp.Category" %>

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
                        <h3>Category Selection</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- category form section -->
    <section class="category_section layout_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card p-4">
                        <div id="CategoryForm" runat="server">
                            <div>
                                <asp:Label AssociatedControlID="ddlCategory" Text="Category Name" CssClass="form-label" runat="server"></asp:Label>
                                <asp:DropDownList ID="ddlCategory" CssClass="form-select" runat="server">
                                    <asp:ListItem Text="Select Category" Value="" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="Mens" Value="Mens"></asp:ListItem>
                                    <asp:ListItem Text="Womens" Value="Womens"></asp:ListItem>
                                </asp:DropDownList>
                                <asp:RequiredFieldValidator ID="rfvCategory" ControlToValidate="ddlCategory" InitialValue="" ErrorMessage="Category is required" CssClass="text-danger" runat="server"></asp:RequiredFieldValidator>
                            </div>
                            <div class="text-center mt-4">
                                <asp:Button ID="btnSubmit" CssClass="btn btn-primary w-100" Text="Submit" OnClick="btnSubmit_Click" runat="server" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Repeater to display categories -->
            <div class="row mt-5">
                <div class="col-lg-8 mx-auto">
                    <h4 class="text-center mb-4">Category List</h4>
                    <asp:Repeater ID="rptCategory" runat="server">
                        <HeaderTemplate>
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Category ID</th>
                                        <th>Category Name</th>
                                        <th>Registration Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                        </HeaderTemplate>
                        <ItemTemplate>
                            <tr>
                                <td><%# Eval("CategoryID") %></td>
                                <td><%# Eval("CategoryName") %></td>
                                <td><%# Convert.ToDateTime(Eval("RegistrationDate")).ToString("dd/MM/") %></td>
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
    </section>
</asp:Content>
