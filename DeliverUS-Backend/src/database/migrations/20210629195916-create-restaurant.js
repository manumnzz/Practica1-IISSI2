module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      description: {
        allowNull: true,
        type: Sequelize.STRING
      },

      address: {
        allowNull: true,
        type: Sequelize.STRING
      },

      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },

      url: {
        allowNull: true,
        type: Sequelize.STRING
      },

      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },

      averageServiceMinutes: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },

      email: {
        allowNull: true,
        type: Sequelize.STRING
      },

      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },

      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },

      heroImage: {
        allowNull: true,
        type: Sequelize.STRING
      },

      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['online', 'offline', 'closed', 'temporaly closed']
      },

      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },

      userId: {
        allowNull: true,
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
