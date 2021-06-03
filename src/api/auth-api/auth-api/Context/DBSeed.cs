using auth_api.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace auth_api.Context
{
    public class DBSeed
    {
        public enum Roles
        {
            Administrator,
            Moderator,
            User
        }

        public static async Task SeedEssentialsAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //Seed Roles
            await roleManager.CreateAsync(new IdentityRole("Administrator"));
            await roleManager.CreateAsync(new IdentityRole("Moderator"));
            await roleManager.CreateAsync(new IdentityRole("User"));

            //Seed Default User
            var defaultUser = new ApplicationUser { UserName = "admin", Email = "admin@mail.com", EmailConfirmed = true, PhoneNumberConfirmed = true };

            if (userManager.Users.All(u => u.Id != defaultUser.Id))
            {
                await userManager.CreateAsync(defaultUser, "admin");
                await userManager.AddToRoleAsync(defaultUser, "Administrator");
            }
        }
    }
}
