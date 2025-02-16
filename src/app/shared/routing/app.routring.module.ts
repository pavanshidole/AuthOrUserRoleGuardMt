import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { UesrDashBoaredComponent } from "../components/uesr-dash-boared/uesr-dash-boared.component";
import { ProductDashBoaredComponent } from "../components/product-dash-boared/product-dash-boared.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { FairComponent } from "../components/fair/fair.component";
import { UserDetailsComponent } from "../components/uesr-dash-boared/user-details/user-details.component";
import { UserFormComponent } from "../components/uesr-dash-boared/user-form/user-form.component";
import { ProductFormComponent } from "../components/product-dash-boared/product-form/product-form.component";
import { ProductDetailsComponent } from "../components/product-dash-boared/product-details/product-details.component";
import { AuthComponent } from "../components/auth/auth.component";
import { AuthGuard } from "../service/auth.guard";
import { FairDetailsComponent } from "../components/fair/fair-details/fair-details.component";


const appRoutes:Routes=[
    {
        path:'',
        component:AuthComponent,
        title:'Auth',
    },
    {
        path:'home',
        component:HomeComponent,
        title:'home',
        canActivate:[AuthGuard]
    },
    {
        path:'user',
        component:UesrDashBoaredComponent,
        title:'user',
        canActivateChild:[AuthGuard],
        canActivate:[AuthGuard],
        data:{
            userRole:['admin','superAdmin']
        },
        children:[
            {
                path:'AddUser',
                component:UserFormComponent,
                title:'AddUser',
                
            },
            {
                path:':userId',
                component:UserDetailsComponent,
                title:'userInfo',
                
            },
            {
                path:':userId/EditUser',
                component:UserFormComponent,
                title:'EditUser',
               
            },
        ]
    },
    {
        path:'product',
        component:ProductDashBoaredComponent,
        title:'product',
        canActivate:[AuthGuard],
        data:{
            userRole:['buyer','admin','superAdmin']
        },
        children:[
            {
                path:'AddProd',
                component:ProductFormComponent,
                title:'AddProd'
            },
            {
                path:':ProductId',
                component:ProductDetailsComponent,
                title:'ProdInfo'
            },
            {
                path:':ProductId/EditProd',
                component:ProductFormComponent,
                title:'EditProd'
            },
        ]
    },
    {
        path:'fair',
        component:FairComponent,
        title:'fair',
        canActivate:[AuthGuard],
        data:{
            userRole:['superAdmin']
        },
        children:[
            {
                path:':fairId',
                component:FairDetailsComponent,
                title:'fairInfo',
            }
        ]
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent,
        title:'page-not-found',
    },
    {
        path:'**',
        redirectTo:'page-not-found'
    },
    
]



@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule{

}