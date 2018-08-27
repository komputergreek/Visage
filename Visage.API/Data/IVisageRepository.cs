using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Visage.API.Helpers;
using Visage.API.Models;

namespace Visage.API.Data
{
    public interface IVisageRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int id);
    }
}