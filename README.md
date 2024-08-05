# Operadores de Sequelize

`Op` es un objeto en Sequelize que contiene varios operadores de comparación que puedes usar en tus consultas. Aquí hay una lista de algunos operadores comunes y sus usos:

- **Op.eq**: Igual a (=).
- **Op.ne**: No igual a (!=).
- **Op.gt**: Mayor que (>).
- **Op.gte**: Mayor o igual que (>=).
- **Op.lt**: Menor que (<).
- **Op.lte**: Menor o igual que (<=).
- **Op.between**: Entre un rango de valores.
- **Op.notBetween**: No entre un rango de valores.
- **Op.in**: En un conjunto de valores.
- **Op.notIn**: No en un conjunto de valores.
- **Op.like**: Similar a (usado para patrones de búsqueda).
- **Op.notLike**: No similar a.
- **Op.iLike**: Similar a (insensible a mayúsculas/minúsculas, solo para PostgreSQL).
- **Op.notILike**: No similar a (insensible a mayúsculas/minúsculas, solo para PostgreSQL).
- **Op.startsWith**: Comienza con.
- **Op.endsWith**: Termina con.
- **Op.substring**: Contiene.
- **Op.regexp**: Coincide con una expresión regular (solo para PostgreSQL).
- **Op.notRegexp**: No coincide con una expresión regular (solo para PostgreSQL).
- **Op.iRegexp**: Coincide con una expresión regular insensible a mayúsculas/minúsculas (solo para PostgreSQL).
- **Op.notIRegexp**: No coincide con una expresión regular insensible a mayúsculas/minúsculas (solo para PostgreSQL).

## Ejemplos de uso

### Op.eq y Op.ne

```javascript
const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.eq]: 100 // Igual a 100
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.ne]: 100 // No igual a 100
        }
    }
});


Op.eq y Op.ne
const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.eq]: 100 // Igual a 100
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.ne]: 100 // No igual a 100
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.gt]: 50 // Mayor que 50
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.gte]: 50 // Mayor o igual que 50
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.lt]: 200 // Menor que 200
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.lte]: 200 // Menor o igual que 200
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.between]: [50, 200] // Entre 50 y 200
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        quantity: {
            [Op.notBetween]: [50, 200] // No entre 50 y 200
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        status: {
            [Op.in]: ['available', 'reserved'] // En el conjunto ['available', 'reserved']
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        status: {
            [Op.notIn]: ['sold', 'damaged'] // No en el conjunto ['sold', 'damaged']
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        name: {
            [Op.like]: '%medicine%' // Similar a '%medicine%'
        }
    }
});

const inventories = await InventoryModel.findAll({
    where: {
        name: {
            [Op.notLike]: '%expired%' // No similar a '%expired%'
        }
    }
});


# Métodos de Sequelize

Sequelize ofrece una variedad de métodos para interactuar con tu base de datos. Aquí hay una lista de los métodos más comunes, sus usos, y ejemplos de cómo utilizarlos:

## findOne
Busca una sola entrada que coincida con los criterios.


const user = await UserModel.findOne({ where: { username: 'john_doe' } });
findAll
Busca todas las entradas que coincidan con los criterios.

javascript
Copiar código
const users = await UserModel.findAll({ where: { status: 'active' } });
findByPk
Busca una entrada por su clave primaria.

javascript
Copiar código
const user = await UserModel.findByPk(1); // Busca el usuario con ID 1
create
Crea una nueva entrada.

javascript
Copiar código
const newUser = await UserModel.create({ username: 'jane_doe', email: 'jane@example.com' });
update
Actualiza las entradas que coincidan con los criterios.

javascript
Copiar código
await UserModel.update({ status: 'inactive' }, { where: { lastLogin: { [Op.lt]: new Date() } } });
destroy
Elimina las entradas que coincidan con los criterios.

javascript
Copiar código
await UserModel.destroy({ where: { status: 'inactive' } });
count
Cuenta el número de entradas que coincidan con los criterios.

javascript
Copiar código
const count = await UserModel.count({ where: { status: 'active' } });
findOrCreate
Busca una entrada y la crea si no existe.

javascript
Copiar código
const [user, created] = await UserModel.findOrCreate({
  where: { username: 'john_doe' },
  defaults: { email: 'john@example.com' }
});
bulkCreate
Crea múltiples entradas en una sola operación.

javascript
Copiar código
const users = await UserModel.bulkCreate([
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' }
]);
upsert
Inserta o actualiza una entrada.

javascript
Copiar código
const user = await UserModel.upsert({ id: 1, username: 'john_doe', email: 'john_updated@example.com' });
Estos métodos te permiten realizar una amplia variedad de operaciones en tu base de datos de manera eficiente y con un código limpio y organizado.